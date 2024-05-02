import { Area } from "@base/api/models/Reports/Area";
import { Report } from "@base/api/models/Reports/Report";
import { AppDataSource } from "@base/config/db";
import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { Between } from "typeorm";

@Service()
export class ReportRepository extends RepositoryBase<Report>{

    constructor() {
        super(AppDataSource.getRepository(Report));
    }

    public async findOneReport(id: number){
        return await this.findById(id)
    }

    public async findAllReport(){
        return await this.findAll()
    }

    public async findTotReports(area: Area) {
        const degreesGap = area.radiusGap / 6371 * (180 / Math.PI);
    
        const latRange = { min: area.lat - degreesGap, max: area.lat + degreesGap };
        const lonRange = { min: area.lon - degreesGap, max: area.lon + degreesGap };
    
        return await this.repository.findAndCount({
            where: {
                lat: Between(latRange.min, latRange.max),
                lon: Between(lonRange.min, lonRange.max)
            }
        });
    }

    public async insertReport(report: Report){
        return await this.create(report)
    }

    public async updateReport(id: number, report: Report){
        return await this.update(id, report)
    }

    public async deleteReport(id: number){
        return await this.delete(id)
    }

}