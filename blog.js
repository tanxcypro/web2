let blogs=[]

function addBlog(event) {
    event.preventDefault()
    let name=document.getElementById("input-name-project").value
    let start=document.getElementById("input-start-date").value
    let end=document.getElementById("input-end-date").value
    let pesan=document.getElementById("pesan").value
    let node=document.getElementById("pesan").value
    let image=document.getElementById("upload")
    image=URL.createObjectURL(image.files[0])
   
         // console output for demo

  

    let blog={
        name:name,
        start:new Date(start),
        end:new Date(end),
       "styles":[],
        pesan:pesan,
      
        image:image,
        postAt:new Date()
        


    }
  
    var sbox = document.getElementsByName( "list" ) ;
    blog.styles = [] // empty the array before rebuilding it
         sbox.forEach( function( v ) {
             if ( v.checked ) {
                 console.log(sbox);
               blog.styles.push( v.value );   
               
            
         } );
   
        

    blogs.push(blog)
    console.log(blogs)
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
                                                                <a href="/blog-detail.html/" target="_blank"
                                                                >${blogs[i].name}</a
                                                                >
                                                            </h6>
                                                            <div class="detail-blog-content">
                                                           Durasi: ${getDistanceTime(blogs[i].start)}
                                                            </div>
                                                            <p>
                                                                ${getFullTime(blogs[i].end)}
                                                            </p>
                                                            <div class="sosmed">
                                                                <img style="cursor:pointer;" src="/img2/${blogs[i].styles[0]}">
                                                                <img src="/img2/${blogs[i].styles[1]}">
                                                                <img src="/img2/${blogs[i].styles[2]}" >
                                                                <img src="/img2/${blogs[i].styles[3]}" >
                                                            </div>
                                                            <div class="btn-group">
                                                                <button class="btn-edit" style="cursor:pointer;"> Edit Post</button>
                                                                <button class="btn-post" style="cursor:pointer;">Post Blog</button>
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

    let hours= waktu.getHours()
    let minutes=waktu.getMinutes()

    let fulltime=`${date} ${mounth[mounthIndex]} ${years} `
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
        return `${mounth} mounth ago`
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
