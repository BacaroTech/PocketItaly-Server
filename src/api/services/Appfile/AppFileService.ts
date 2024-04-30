import { Service } from "typedi";
import * as fs from 'fs/promises';
import * as path from 'path';

@Service()
export class AppFileService {
  
  private baseDir: string = path.resolve(__dirname, 'storage');

  public async saveAppFile(fileName: string, data: Buffer | string): Promise<string> {
    try {
      const filePath = path.join(this.baseDir, fileName);

      await fs.mkdir(this.baseDir, { recursive: true });
      await fs.writeFile(filePath, data);
      
      return `File saved successfully at ${filePath}`;
    } catch (error:any) {
      throw new Error(`Failed to save file: ${error.message}`);
    }
  }

  public async deleteAppFile(fileName: string): Promise<string> {
    try {
      const filePath = path.join(this.baseDir, fileName);

      await fs.access(filePath);
      await fs.unlink(filePath);

      return `File deleted successfully from ${filePath}`;
    } catch (error:any) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }

}
