jQuery('document').ready(function(){

   let socket = io();

  console.log("Boom!!");

  //Function call for the materialize css framework
   $('select').material_select();

   jQuery('#new-poem-form').on('submit',function(e){
     e.preventDefault();
     let title = jQuery('[name=title]'),
        poem = jQuery('[name=poem]'),
        cat = jQuery('[name=category-select]'),
        active = jQuery('[name=is-active]'),
        image = jQuery('[name=image]');
    console.log(title.val(),poem.val(),cat.val(),active.is(':checked'),image.prop('files'));
   })

  jQuery('#admin-side-section-buttons nav ul li').click(function(ele){
    let li = jQuery(this);
    let text = li[0].textContent;
    //#98ad8a
    li.css('background-color',"#aa4c50").siblings('li').css('background-color','#ee6e73');
    if(text === "View Poems"){
      jQuery('#admin-main-section-view-poems').css('display','block').siblings('.admin-main-section__section').css('display','none');
    }else if(text === "Add new Poem"){
      jQuery('#admin-main-section-add-poem').css('display','block').siblings('.admin-main-section__section').css('display','none');
    }else if(text === "View Messages"){
      jQuery('#admin-main-section-messages').css('display','block').siblings('.admin-main-section__section').css('display','none');
    }
  })
});
