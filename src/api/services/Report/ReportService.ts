import { Area } from "@base/api/models/Reports/Area";
import { Report } from "@base/api/models/Reports/Report";
import { ReportRepository } from "@base/api/repositories/Reports/ReportRepository";
import { Inject, Service } from "typedi";

@Service()
export class ReportService{

    @Inject()
    private reportRepository: ReportRepository

    public async getOneReport(id: number){
        return await this.reportRepository.findOneReport(id)
    }

    public async getAllReports(){
        return await this.reportRepository.findAll()
    }

    public async getCountTotReport(area: Area){
        return await this.reportRepository.findTotReports(area)
    }

    public async insertReport(report: Report){
        return await this.reportRepository.insertReport(report)
    }

    public async updateReport(report: Report){
        return await this.reportRepository.updateReport(report.id, report)
    }

    public async deleteReport(id: number){
        return await this.reportRepository.deleteReport(id)
    }
}