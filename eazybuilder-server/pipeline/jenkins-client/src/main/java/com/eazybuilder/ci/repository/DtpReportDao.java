package com.eazybuilder.ci.repository;

import com.eazybuilder.ci.entity.DtpReport;
import com.eazybuilder.ci.entity.pipeline.CIPackage;
import org.springframework.stereotype.Repository;

@Repository
public interface DtpReportDao extends BaseDao<DtpReport, String>{
}
