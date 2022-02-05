let blogs=[]
function addBlog(event) {
    event.preventDefault()
    let name=document.getElementById("input-name-project").value
    let start=document.getElementById("input-start-date").value
    let end=document.getElementById("input-end-date").value
    let pesan=document.getElementById("pesan").value
    let node=document.getElementById("node-js").value
    let typescript=document.getElementById("typescript").value
    let react=document.getElementById("react-js").value
    let next=document.getElementById("next-js").value
    let image=document.getElementById("upload")

    image=URL.createObjectURL(image.files[0])

    let blog={
        name:name,
        start:start,
        end:end,
       
        pesan:pesan,
        node:node,
        typescript:typescript,
        react:react,
        next:next,
        image:image


    }
    blogs.push(blog)
    console.log(blog)
    renderBlog()
}
function renderBlog(){
    let isiCOntent=document.getElementById("contents")
    isiCOntent.innerHTML=''
    for (let i=0;i<blogs.length;i++){
        isiCOntent.innerHTML+=`<div class="blog-list-item">
                                <div class="blog-image">
                                <img src="${blogs[i].image}" alt="" />
                                </div>
                                <div class="blog-content">
                                    <h6>
                                        <a href="blog-detail.html" target="_blank"
                                        >${blogs[i].name}</a
                                        >
                                    </h6>
                                    <div class="detail-blog-content">
                                      durasi: 30
                                    </div>
                                    <p>
                                    ${blogs[i].pesan}
                                        
                                    </p>
                                    <div class="sosmed">
                                        <img src="img/twitter.png" alt="">
                                        <img src="img/mail.png" alt="">
                                        <img src="img/whatsapp.png" alt="">
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn-edit">Edit Post</button>
                                        <button class="btn-post">Post Blog</button>
                                        </div>
                                </div>
                                
                            </div> `
    }
}
// function getDistanceTime() {
//     let timePost=start
//     let timeNow=end
    
//     var distance =timePost.getTime() - timeNow.getTime();
    
   
    
//     let miliSecond=1000
//     let secondHours=3600
//     let hoursDay= 23

    
//  let Day=Math.floor(distance / (miliSecond*secondHours*hoursDay))
 
// return`durasi: ${Day}`
// }