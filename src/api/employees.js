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
