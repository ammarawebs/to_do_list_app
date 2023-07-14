var input_text = document.getElementById('input_text');
var show_task = document.getElementById('show_value');
var show_del_btn = document.getElementById('show_del_btn')
var show_done_btn = document.getElementById('show_done_btn')

const add_task_audio = new Audio('./sounds/add_task_sound.mp3')
const delete_task_audio = new Audio('./sounds/delete_task_sound.mp3')
const done_task_audio = new Audio('./sounds/done_task_sound.mp3')

let task_array = []
let task_detail = {}
let para_array = []
let done_array = []
let delete_array = []





function show_value(){

    const para = document.createElement('p');
    const del_btn = document.createElement('button');
    del_btn.className = 'delete_btn'
    
    
    const done_btn = document.createElement('button');
    done_btn.className = 'done_btn'
    let input_value = input_text.value;

    add_task_audio.play();
    
    task_array.push({
        // id:45,// todo
        name : input_value,
        delete : ' 🗑️ ',
        done : ' ✔️ '
    })
    para_array.push(para)
    delete_array.push(del_btn)
    done_array.push(done_btn)
    
    input_text.value = ''


    


    for(var i = 0 ; i < task_array.length ; i++){
        para_array[i].innerHTML = task_array[i].name;
        delete_array[i].innerHTML = task_array[i].delete;
        done_array[i].innerHTML = task_array[i].done;
        delete_array[i].setAttribute('id', i)
        done_array[i].setAttribute( 'id' , i)
        
        
        
        show_task.appendChild(para_array[i]);
        show_del_btn.appendChild(delete_array[i]);
        show_done_btn.appendChild(done_array[i]);

    }

    del_btn.onclick = function(e){
        delete_task(e.target.id)
        delete_task_audio.play();
        
    }

    done_btn.onclick = function(e){
        done_task(e.target.id)
        done_task_audio.play();
    }
    
    
}

function delete_task(val){
    task_array.forEach(function (item , index){
        if(val == index){
            task_array.splice(val , 1);
            para_array.splice(val, 1);
            delete_array.splice(val , 1);
            done_array.splice(val, 1);

            show_task.innerHTML ='';
            show_del_btn.innerHTML = '';
            show_done_btn.innerHTML = '';

            

            




            
            for(var i = 0 ; i < task_array.length ; i++){
                para_array[i].innerHTML = task_array[i].name;
                delete_array[i].innerHTML = task_array[i].delete;
                done_array[i].innerHTML = task_array[i].done;
                delete_array[i].setAttribute('id', i)
                done_array[i].setAttribute( 'id' , i)
                     
                show_task.appendChild(para_array[i]);
                show_del_btn.appendChild(delete_array[i]);
                show_done_btn.appendChild(done_array[i]);
            }


        }
    })

    



}

function done_task(val){

    task_array.forEach(function (item , index){
        if(val == index){
            para_array[val].style.textDecoration = 'line-through';
        }
    })

}


