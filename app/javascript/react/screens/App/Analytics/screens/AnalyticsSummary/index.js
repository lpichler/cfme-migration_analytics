import { connect } from 'react-redux';
import AnalyticsSummary from './AnalyticsSummary';
import { fetchReportsAction, runReportAction } from '../../../../../../redux/reports/reportsActions';
import { selectReportByFilterValues, selectRunByReport } from '../../../../../../redux/reports/reportsSelectors';
import { VM_SUMMARY_REPORT_FILTERS } from '../../constants';

const mapStateToProps = ({ migrationAnalytics: { reports } }) => {
  const vmSummaryReport = selectReportByFilterValues(reports, VM_SUMMARY_REPORT_FILTERS);
  return {
    vmSummaryReport,
    lastVmSummaryReportRun: selectRunByReport(reports, vmSummaryReport)
  };
};

export default connect(
  mapStateToProps,
  { fetchReportsAction, runReportAction }
)(AnalyticsSummary);
