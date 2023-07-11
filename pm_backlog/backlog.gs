function main(e){
  var backlog_spreadsheet = SpreadsheetApp.openById("1dnoCXKFVbyWkB1yfAJ8tOjhaFjaAcgC0DB-0dfXoZOY");
  var backlog_sheet = backlog_spreadsheet.getSheetByName("Data Backlog");
  var collection_array = [], action_array = [];
    
  for (var i = 0; (i+3) <= backlog_sheet.getMaxRows(); i++){
    collection_array.push(fillCollectionArray(i+3, backlog_sheet));
    action_array.push(fillActionArray(collection_array[i], i+3, backlog_sheet));
    
  }

  backlog_sheet.getRange(3, 1, action_array.length, action_array[0].length).setValues(action_array);
  setFormat(backlog_sheet, action_array);
}

function fillCollectionArray(row, backlog_sheet){
  var row_data = [];

  for (var i = 10; i <= 18; i++){
    row_data[i-10] = backlog_sheet.getRange(row, i, 1, 1).getValue();
  }

  return row_data;
}

function fillActionArray(collection_array, row, backlog_sheet){
  var row_data = [];

  //set Assignee
  if(backlog_sheet.getRange("A" + row.toString()).getValues() == ""){
    row_data[0] = "Currently Unassigned"
  } else {
    row_data[0] = backlog_sheet.getRange("A" + row.toString()).getValue();
  }

  //set Affiliate
  row_data[1] = collection_array[1];

  //set Affiliation
  row_data[2] = collection_array[2];

  //set Affiliation
  row_data[3] = collection_array[3];

  //set priority
  row_data[4] = collection_array[8];

  //set Status
  if(backlog_sheet.getRange("F" + row.toString()).getValues() == ""){
    row_data[5] = "Not Started";
  } else {
    row_data[5] = backlog_sheet.getRange("F" + row.toString()).getValue();
  }

  if(backlog_sheet.getRange("G" + row.toString()).getValues() == ""){
    row_data[6] = "N/A";
  } else {
    row_data[6] = backlog_sheet.getRange("I" + row.toString()).getValue();
  }

  //set Final Result
  if (row_data[5] == "Not Started" || row_data[5] == "In Progress"){
    row_data[7] = "N/A";
  } else {
    row_data[7] = backlog_sheet.getRange("F" + row.toString()).getValue();
  }
  
  //set comments
  if(backlog_sheet.getRange("I" + row.toString()).getValues() == ""){
    row_data[8] = "N/A";
  } else {
    row_data[8] = backlog_sheet.getRange("I" + row.toString()).getValue();
  }

  return row_data;
}

function setFormat(backlog_sheet, action_array){
  var data_wall = backlog_sheet.getRange(3, 10, backlog_sheet.getMaxRows(), 1);
  var all_cells = backlog_sheet.getRange("A3:R" + (backlog_sheet.getMaxRows()).toString())

  all_cells.setFontFamily("Source Code Pro");
  all_cells.setVerticalAlignment("middle");
  all_cells.setHorizontalAlignment("center");
  all_cells.setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  backlog_sheet.setColumnWidths(1,backlog_sheet.getMaxColumns(), 150);
  backlog_sheet.setRowHeights(1,backlog_sheet.getMaxRows(), 70);
  
  data_wall.setBorder(false, true, false, false, false, false, "black", SpreadsheetApp.BorderStyle.SOLID_THICK);

  for(var i = 0; i < action_array.length; i++){
    if(action_array[i][5] == "Not Started"){
      backlog_sheet.getRange(i+3, 1, 1, backlog_sheet.getMaxColumns()).setBackground("#f4cccc");
    } else if (action_array[i][5] == "In Progress"){
      backlog_sheet.getRange(i+3, 1, 1, backlog_sheet.getMaxColumns()).setBackground("#fff2cc");
    } else {
      backlog_sheet.getRange(i+3, 1, 1, backlog_sheet.getMaxColumns()).setBackground("#d9ead3");
    }
  }

}