import { Area } from "@base/api/models/Reports/Area";
import { Report } from "@base/api/models/Reports/Report";
import { ReportService } from "@base/api/services/Report/ReportService";
import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Inject, Service } from "typedi";


@Service()
@OpenAPI({
  tags: ['Report'],
})
@JsonController('/report')
export class ReportController{

    @Inject()
    private reportService: ReportService

    @Post()
    public async insertReport(@Body() report: Report){
        return await this.reportService.insertReport(report)
    }

    @Post('/area')
    public async getCountTotReport(@Body() area: Area){
        return await this.reportService.getCountTotReport(area)
    }

    @Get('/:id')
    public async getOneReport(@Param('id') id: number){
        return await this.reportService.getOneReport(id)
    }

    @Delete('/:id')
    public async deleteReport(@Param('id') id: number){
        return await this.reportService.deleteReport(id)
    }

    @Put()
    public async updateReport(@Body() report: Report){
        return await this.reportService.updateReport(report)
    }

}