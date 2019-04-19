function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('蔵書一覧');
  var data = sheet.getDataRange().getValues();
  Logger.log(data[3][2]);
}