import { service } from '@/utils/axios';

interface LoginParams {
  username: string;
  password: string;
}

// User login api
export function loginApi(data: LoginParams): Promise<any> {
  return service({
    url: '/login',
    method: 'post',
    data,
  });
}

// Get User info
export function getUserInfo(): Promise<any> {
  return service({
    url: '/getUserInfo',
    method: 'get',
  });
}

// User logout api
export function logoutApi() {
  return service({
    url: '/logout',
    method: 'get',
  });
}

// Table list
export function getTableList(params: any) {
  return service({
    url: '/table/getTableList',
    method: 'get',
    params,
  });
}

// juejin api
export function getJueJinList(params) {
  return service({
    url: 'article/queryList',
    method: 'post',
    data: params,
  });
}

export function getUsersList<T>() {
  return service({
    url: 'user/getUserList',
    method: 'get',
  }) as unknown as Promise<T>;
}
