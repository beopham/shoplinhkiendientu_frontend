var kichthuoc=document.getElementsByClassName("column-2")[0].clientWidth;
var chuyen=0;
var chuyenslide=document.getElementsByClassName("khoi2")[0];
var Img=chuyenslide.getElementsByTagName("img");
var Max=kichthuoc*Img.length;
Max=Max-kichthuoc;
function Next()
{

  if(chuyen<Max)
   {
   chuyen=chuyen+kichthuoc;
   }
   else
   {
      chuyen=0;
   }
   
   chuyenslide.style.marginLeft='-' +chuyen+'px';
}
function Back()
{
   if(chuyen==0)
   {
      chuyen=Max;
   }
   else
   {
   chuyen=chuyen-kichthuoc;
   }
   chuyenslide.style.marginLeft= '-' +chuyen+'px';
}
setInterval(function()
{
  Next();
},3000);