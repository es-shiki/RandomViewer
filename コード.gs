
function doGet() {
  //承認を得るためにスクリプト内での読み出しが必要？
  var sheetApp = SpreadsheetApp.openById("1ld5dLDrJETGK-f6bampytMEszpEUN4jKdBksXQN_E40");
  var sheet    = sheetApp.getSheetByName("シート1");
  var data     = sheet.getDataRange().getValues();
  Logger.log(data);

  // return ContentService.createTextOutput("このシートにはデータが" + data.length + "行ある。\n最後の値は" + data[data.length -1][0] + "です。");
  return HtmlService.createTemplateFromFile("index").evaluate();
  
  
}