WB2.anyWhere(function(W) {
  W.parseCMD("/trends/statuses.json", function(sResult, bStatus) {
    console.log('sResult: ');
    console.log(sResult);
    console.log(sResult.length);
    console.log('bStatus: ');
    console.log(bStatus);
  }, {
    source: '1945204960',
    trend_name: 'ideahome'
  }, {
    method: 'post'
  });
});