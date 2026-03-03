export const paths = {
    home: '/',
    cartList: '/',
    cartDetail: (id: number | string) => `/carts/${String(id)}`,
    cartEdit: (id: number | string) => `/carts/${String(id)}/edit`,
    
    notFound: '/404',
    serverError: '/500',
    
    isCartDetail: (pathname: string) => /^\/carts\/\d+$/.test(pathname),
  } as const;
  
  export type RoutePath = typeof paths[keyof typeof paths];
  export default paths;