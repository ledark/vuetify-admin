const defaultProps = {}

function props(options: object = {}): object {
  return { ...defaultProps, ...options }
}

export function isDivider(prop: object):boolean {
    return Object.assign(prop).hasOwnProperty('divider');
}

export function isBold(prop: object):boolean {
    return Object.assign(prop).hasOwnProperty('bold');
}

export type NavbarPropType = {
    title: string,
    to?: string,
    props?: object,
};

export default [
    { title: 'Suporte', props: props({ bold: true })},
    { title: 'Abertura de Chamados', props: props({ to: '/admin/go-to-abertura-de-chamados' })},    
    { props: props({divider: true})},
    { title: 'Trocar Senha', props: props({ to: '/admin/perfil/senha' })},
    { title: 'Ir para o Site', props: props({ to: '/home' })},
    { title: 'Sair', props: props({ to: '/logout' })},    
/*
    
    { title: 'Opção de Link 1', props: props()},
    { title: 'Opção de Link 2', props: props({ to: '/dashboard?1' })},
    { title: 'Opção de Link 3', to: '/dashboard?3', props: props()},
    { props: props({divider: true})},
    { title: 'Opção de Link 4', props: props()},
    { title: 'Opção de Link 5', props: props({ to: '/dashboard?5' })},
    { title: 'Opção de Link 6', to: '/dashboard?6', props: props()},
    { props: props({divider: true})},
    { title: 'Opção de Link 7', props: props()},
    { title: 'Opção de Link 8', to: '/dashboard?8', props: props({ to: '/dashboard?8' })},
    { title: 'Opção de Link 9', to: '/dashboard?9a', props: props({ to: '/dashboard?9b' })},
*/
]