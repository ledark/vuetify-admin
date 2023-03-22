export default [
    { title: 'Menu', children: [
        { to: "/admin/dashboard",   title:"Dashboard" },
        { to: "/admin/go-to-abertura-de-chamados",   title:"Abrir Chamado", disabled: true },
    ]},
    { title: 'Preferências', children: [
        { to: "/logout",     title:"Sair" },
    ]},    
]