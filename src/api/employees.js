import request from '@/utils/request'

export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

export function getEmployeeList(params) {
  return request({
    url: '/sys/user',
    params
  })
}

export function delEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}
