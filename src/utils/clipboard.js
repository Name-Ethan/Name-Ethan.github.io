import { ElMessage } from 'element-plus'

function fallbackCopy(value) {
  const textArea = document.createElement('textarea')
  textArea.value = value
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.left = '-9999px'
  textArea.style.top = '0'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  const copied = document.execCommand('copy')
  document.body.removeChild(textArea)

  if (!copied) {
    throw new Error('copy failed')
  }
}

export async function copyText(value, label = '内容') {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value)
    } else {
      fallbackCopy(value)
    }

    ElMessage.success(`${label}已复制`)
  } catch {
    try {
      fallbackCopy(value)
      ElMessage.success(`${label}已复制`)
    } catch {
      ElMessage.error('复制失败，请稍后重试')
    }
  }
}
