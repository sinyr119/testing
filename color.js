var colors={
  BackColor:function(color){
    var target=document.querySelector('body');
    target.style.backgroundColor=color;
  },
  TextColor:function(color){
    var target=document.querySelector('body');
    target.style.color=color;
  },
  LinksColor:function(color) {
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color=color;
      i+=1;
    }
  }
}
function nightHandler(self){
  if(self.value==='야간모드'){
    colors.BackColor('black');
    colors.TextColor('white');
    colors.LinksColor('white');
    self.value='주간모드';
  }
  else{
    colors.BackColor('white');
    colors.TextColor('black');
    colors.LinksColor('black');
    self.value='야간모드';
  }
}
