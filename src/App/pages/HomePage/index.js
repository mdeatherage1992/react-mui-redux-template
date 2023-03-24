import React from 'react';
import { Typography, Grid, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useHomePageSlice } from './slice';
import { selectDetails, selectLoading } from './slice/selectors';
import { useSelector, useDispatch } from 'react-redux';
// ['Symbol', 'AssetType', 'Name', 'Description', 'CIK', 'Exchange', 'Currency', 'Country', 'Sector', 'Industry', 'Address', 'FiscalYearEnd', 'LatestQuarter', 'MarketCapitalization', 'EBITDA', 'PERatio', 'PEGRatio', 'BookValue', 'DividendPerShare', 'DividendYield', 'EPS', 'RevenuePerShareTTM', 'ProfitMargin', 'OperatingMarginTTM', 'ReturnOnAssetsTTM', 'ReturnOnEquityTTM', 'RevenueTTM', 'GrossProfitTTM', 'DilutedEPSTTM', 'QuarterlyEarningsGrowthYOY', 'QuarterlyRevenueGrowthYOY', 'AnalystTargetPrice', 'TrailingPE', 'ForwardPE', 'PriceToSalesRatioTTM', 'PriceToBookRatio', 'EVToRevenue', 'EVToEBITDA', 'Beta', '52WeekHigh', '52WeekLow', '50DayMovingAverage', '200DayMovingAverage', 'SharesOutstanding', 'DividendDate', 'ExDividendDate']
export function HomePage(props) {
  const dispatch = useDispatch();
  const { actions } = useHomePageSlice();
  const data = useSelector(selectDetails);
  const loading = useSelector(selectLoading);
  debugger;
  const cols = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'country', headerName: 'Country', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'domains', headerName: 'Domain', width: 200 },
    { field: 'web_pages', headerName: 'Web Page', width: 200 },
  ];
  React.useEffect(() => {
    dispatch(actions.getHomePageInfo());
  }, [actions, dispatch]);
  return (
    <Grid container p={10}>
      <Typography>Home Page</Typography>
      {loading && (
        <CircularProgress
          size="lg"
          color="primary"
          value={25}
          style={{ height: '25px', width: '25px' }}
        />
      )}
      <Grid item xs={12} sx={{ height: '500px' }}>
        {!loading && data.length > 0 && (
          <DataGrid
            rows={data}
            columns={cols}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        )}
      </Grid>
    </Grid>
  );
}
