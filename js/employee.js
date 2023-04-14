viewAllEmployees();
function saveEmployee(){

    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8084/api/v1/employee/save",
        async:true,
        data:JSON.stringify({
            "employeeId":"",
            "employeeName":name,
            "employeeAddress":address,
            "employeePhone":number

        }),
        success: function (data) {
            alert("saved")
            viewAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
function updateEmployee(){
    let employeeID=$('#exampleFormControlInput1').val();
    let employeeName=$('#exampleFormControlInput2').val();
    let employeeAddress=$('#exampleFormControlInput3').val();
    let employeeNumber=$('#exampleFormControlInput4').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8084/api/v1/employee/update",
        async:true,
        data:JSON.stringify({
            "employeeId":employeeID,
            "employeeName":employeeName,
            "employeeAddress":employeeAddress,
            "employeePhone":employeeNumber

        }),
        success: function (data) {
            alert("Updated")
            viewAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
function deleteEmployee(){
    let id=$('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8084/api/v1/employee/delete/"+id,
        async:true,
        success: function (data) {
            alert("Deleted")
            viewAllEmployees()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}

function viewAllEmployees(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8084/api/v1/employee/view-all",
        async:true,
        success: function (data) {
                $('#empTable').empty();
                for (let emp of data.content){
                    let employeeID=emp.employeeId
                    let employeeName=emp.employeeName
                    let employeeAddress=emp.employeeAddress
                    let employeeNumber=emp.employeePhone

                    var row=`<tr onclick="getDetails(this)"><td >${employeeID}</td><td>${employeeName}</td><td>${employeeAddress}</td><td>${employeeNumber}</td></tr>`;
                    $('#empTable').append(row);
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}

function getDetails(row){

    var employeeID = row.cells[0].innerHTML;
    var employeeName = row.cells[1].innerHTML;
    var employeeAddress = row.cells[2].innerHTML;
    var employeeNumber = row.cells[3].innerHTML;

    $('#exampleFormControlInput1').val(employeeID);
    $('#exampleFormControlInput2').val(employeeName);
    $('#exampleFormControlInput3').val(employeeAddress);
    $('#exampleFormControlInput4').val(employeeNumber);

}

// $(document).ready(function () {
//     $(document).on('click', '#empTable tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         var col1 = $(this).find('td:eq(1)').text();
//         var col2 = $(this).find('td:eq(2)').text();
//         var col3 = $(this).find('td:eq(3)').text();
//
//         $('#exampleFormControlInput1').val(col0);
//         $('#exampleFormControlInput2').val(col1);
//         $('#exampleFormControlInput3').val(col2);
//         $('#exampleFormControlInput4').val(col3);
//
//     })
// })

// $(document).ready(function() {
//     console.log("Hi")
//     // Add click event listener to table rows
//     $('table tbody tr').on('click', function() {
//         // Get data from selected row
//         var employeeID = $(this).find('td:eq(0)').text();
//         var employeeName = $(this).find('td:eq(1)').text();
//         var employeeAddress = $(this).find('td:eq(2)').text();
//         var employeeNumber = $(this).find('td:eq(3)').text();
//         console.log("EID",employeeID)
//
//         // Set values in text fields
//         $('#exampleFormControlInput1').val(employeeID);
//         $('#exampleFormControlInput2').val(employeeName);
//         $('#exampleFormControlInput3').val(employeeAddress);
//         $('#exampleFormControlInput4').val(employeeNumber);
//     });
// });
