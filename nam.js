// var correctUser = 'phamvannam@123';
// var correctPass='09112003'
// var inputusername = document.getElementById('taikhoan');
// var inputpassword = document.getElementById('matkhau');


// var formId =document.getElementById('form-id');

// if(formId.attachEvent)
// {
// 	formId.attachEvent('submit',onformsubmit);
// }
// else
// {
//    formId.addEventListener('submit',onformsubmit);
// }


function onformsubmit()
{
   // var taikhoan =inputusername.value;
   // var matkhau=inputpassword.value;
   var taikhoan=document.getElementById("taikhoan").value;
   var matkhau=document.getElementById("matkhau").value;
   var correctUser='phamvannam@123';
   var correctPass='123';
   if(taikhoan==correctUser && matkhau==correctPass)
   {
      location.href="file:///C:/Users/PC/Desktop/WED/%C4%91%E1%BB%93%20%C3%A1n%20wed/trangchu.html";
   	alert('đăng nhập thành công');
   
   }
   else
   {
   	alert('Đăng nhập sai');
   }
}



