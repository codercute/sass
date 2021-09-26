import request from '@/utils/request'
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

export function delDepartments(id) {
  return request({
    method: 'delete',
    url: `/company/department/${id}`
  })
}

export function addDepartments(data) {
  return request({
    url: '/company/department',
    data,
    method: 'post'
  })
}
