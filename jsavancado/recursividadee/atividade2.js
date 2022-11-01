const itens = [
    {
        nome: 'Menu 1',
        itens: [
            {
                nome:'Menu 1.1',
                itens:[]
            },
            {nome: 'Menu 1.2', itens:[]},
            {nome: 'Menu 1.3', itens: [{nome: 'Menu 1.3.1', itens:[]}]},
        ]
    },
    {
        nome: 'Menu 2',
        itens:[
            {
                nome: 'Menu 2.1',
                itens:[{
                    nome: 'Menu 2.1.1',
                    itens: [
                        {
                            nome: 'Menu 2.1.1.1',
                            itens: [
                                {nome: 'Menu 2.1.1.1.1', itens: []},
                                {nome: 'Menu 2.1.1.1.2', itens: []},
                            ]
                        }
                    ]
                },
                {nome:'Menu 2.1.2', itens:[]},
            ]
            },
            {nome:'Menu 2.2', itens: [{nome: 'Menu 2.2.1', itens:[]}]},
        ]
    }
]


function funcaoRecursiva(name, itensMenu){
    for(let i = 0; i < itensMenu.length; i++){
        if(name === itensMenu[i].nome){
            return name
            
        }else if(itensMenu[i].itens.length > 0 ){
            let chamadaFuncao =  funcaoRecursiva(name, itensMenu[i].itens)
            if(chamadaFuncao != undefined){
                return `${itensMenu[i].nome} > ${chamadaFuncao}`
            }
        }
    }
}