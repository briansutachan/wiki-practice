const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'


const searchTerm = document.querySelector(`.search_term`)
const searchButton = document.querySelector(`.search`)
const randomButton = document.querySelector(`.random`)
const output = document.querySelector(`.output`)

let ajaxsearch = ()=>{
    // console.log(`Ready for ajax search`)
    let api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
   
    $.ajax({
        url: api_url,
        dataType: `json`,
        success: (data)=>{
            console.log(data)
            output.innerHTML


            //data[0] is the search title
            //data[1] is the title
            // data[2] is the description
            // data[3] is the links

            for(let i in data[1]){
                output.innerHTML +=`
                <li>
                  <a href="${data[3][i]}">${data[1][i]}</a>
                  <p>${data[2][i]}</p>
                </li>
                 `
            }
        },
        error: (error)=>{
            console.log("This is a error")
        }
    })
}

searchButton.addEventListener('click', ajaxsearch)
randomButton.addEventListener('click', function(){
    window.open(`${wiki_link}${randomEndpoint}`)
})
