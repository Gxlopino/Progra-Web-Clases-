 let carrerRows = document.getElementById("tablita").children[1].children.length;

    function Eliminar(event){
      event.preventDefault();
        document.getElementById("carrerID").value="";
        document.getElementById("name").value="";
        document.getElementById("Ncarrera").innerHTML="Nueva Carrera";
    }

    function RegistrarCarrera(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let name = document.getElementById("name").value;
        let TableCarrers = document.getElementById("tablita");
        let carrerID =document.getElementById("carrerID").value;

        if(carrerID==""){  
        let tr = document.createElement("TR");
        let td1 = document.createElement("TD");
        let td2 = document.createElement("TD");
        let td3 = document.createElement("TD");
        
        carrerRows=carrerRows + 1
        td1.innerHTML = carrerRows;
        td2.innerHTML = name;
        td3.innerHTML = `<button 
                        class="btn btn-sm btn-outline-secondary me-1"
                        onclick="editar(${carrerRows},event)"
                        >
                        <i class="fa fa-edit"></i>
                        Editar
                        </button>

                         <button
                        class="btn btn-sm btn-outline-danger"
                        onclick="eliminar(${carrerRows},event)"
                        >
                        <i class="fa fa-trash"></i>
                        Eliminar
                        </button>`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        TableCarrers.appendChild(tr);


        console.log(tr);
        TableCarrers.children[1].appendChild(tr);
        
        

        }
        else{
         
          let tbody=TableCarrers.children[1];


          for (let tr of tbody.children){
            //console.log(tr) //cada elemento
            if(tr.children[0].innerHTML.trim()==carrerID){
                tr.children[1].innerHTML=name;
                document.getElementById("carrerID").value="";
                document.getElementById("name").value="";
                document.getElementById("Ncarrera").innerHTML="Nueva Carrera";
            }
          }
        }

       
    }

    function eliminar(id,event){
            let td=event.currentTarget.parentElement.parentElement;
            td.remove();
    }    

    function editar(id,event){
        event.preventDefault();
        let td=event.currentTarget.parentElement.parentElement;
        let idrown = td.children[0].innerHTML;
        let name=td.children[1].innerHTML;
        
        document.getElementById("name").value=name.trim();
        document.getElementById("carrerID").value=idrown.trim();
        document.getElementById("Ncarrera").innerHTML="Editar Carrera";

        console.log(document.getElementById("carrerID").value=idrown.trim())


    }
