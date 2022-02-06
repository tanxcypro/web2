let blogs=[]
let judul="my project"
function addBlog(event) {
    event.preventDefault()
    let name=document.getElementById("input-name-project").value
    let start=document.getElementById("input-start-date").value
    let end=document.getElementById("input-end-date").value
    let pesan=document.getElementById("pesan").value
    let jquery=document.getElementById("jquery").value
    let js=document.getElementById("js").value
    let node=document.getElementById("node").value
    let react=document.getElementById("react").value
    
    let image=document.getElementById("upload")

    image=URL.createObjectURL(image.files[0])

    let hasil=start-end

    let blog={
        name:name,
        start:new Date(start),
        end:new Date(end),
       
        pesan:pesan,
        node:node,
       jquery:jquery,
        react:react,
        js:js,
        image:image,
        postAt:new Date()
        


    }
    blogs.push(blog)
    console.log(blog)
    renderBlog()
}
function renderBlog(){
    let isiCOntent=document.getElementById("contents")
    isiCOntent.innerHTML=''
    for (let i=0;i<blogs.length;i++){
        isiCOntent.innerHTML+=` <div id="contents" class="blog-list">
                                            <div class="project">
                                                <h3> </h3>
                                                <div class="judul">
                                                    <div class="blog-list-item">
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
                                                           Durasi: ${getDistanceTime(blogs[i].start)}
                                                            </div>
                                                            <p>
                                                                ${blogs[i].pesan}
                                                            </p>
                                                            <div class="sosmed">
                                                                <img src="${blogs[i].jquery}" alt="">
                                                                <img src="${blogs[i].js}" alt="">
                                                                <img src="${blogs[i].node}" alt="">
                                                                <img src="${blogs[i].react}" alt="">
                                                            </div>
                                                            <div class="btn-group">
                                                                <button class="btn-edit">Edit Post</button>
                                                                <button class="btn-post">Post Blog</button>
                                                                </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                </div>
                                            
                                            </div>
                                            
                                            
                                            <!-- dynamic content would be here -->
                                            
                                        </div>`
    }
}
let mounth=[
    'januari',
    'februari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'november',
    'desember'
]
function getFullTime(waktu) {
    
    
    let date=waktu.getDate()
    let mounthIndex=waktu.getMonth()
    let years=waktu.getFullYear() 
  
  

    

   
    let fulltime=`${date} ${mounth[mounthIndex]} ${years}`
    return fulltime
    
}
function getFullTime(waktu) {
    
    
    let date=waktu.getDate()
   
    let mounthIndex=waktu.getMonth()
    let years=waktu.getFullYear()

    let hours= waktu.getHours()
    let minutes=waktu.getMinutes()

    let fulltime=`${date} ${mounth[mounthIndex]} ${years}${hours}:${minutes} wib`
    return fulltime
}
   function getDistanceTime(waktu) {
       let timePost=waktu
       
       let timeNow=new Date()
       

       let distance=timeNow-timePost
      
       
       let miliSecond=1000
       let secondHours=3600
       let hoursDay= 23
       let daysMounth=30

       let mounth=Math.floor(distance / (miliSecond*secondHours*hoursDay*daysMounth))

    if(mounth>=1){
        return `${mounth} ago`
    }else{

        let Day=Math.floor(distance / (miliSecond*secondHours*hoursDay))
    if (Day >=1) {
        
           console.log(`${Day} ago`)
            
           
       } else {
           
        let distanceHours=Math.floor(distance/(miliSecond*secondHours))
        if (distanceHours>=1) {
            console.log(`${distanceHours} hours ago`)
            
        }else{
            let distanceMinutes=Math.floor(distance/(miliSecond*60))
            if(distanceMinutes>=1){
                return`${distanceMinutes} minutes ago`
            }else{
                let hasil= Math.ceil(distance/miliSecond)
                return `${hasil} second `
            }
            
        }
       }
       
    }

       
    
   }
