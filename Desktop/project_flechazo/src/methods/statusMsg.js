import emitter from '@/utils/emitter.js'
export default function (res = true, title = '更新', content) {
  if (res) {
    emitter.emit('push-status-msg', {
      style: 'primary',
      title: `${title}成功`,
      content: content,
      icon: 'bi bi-check-circle-fill'
    })
  } else {
    emitter.emit('push-status-msg', {
      style: 'danger',
      title: `${title}失敗`,
      content: content,
      icon: 'bi bi-x-circle-fill'
    })
  }
}
