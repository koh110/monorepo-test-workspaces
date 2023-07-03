import dayjs from 'dayjs'

export const toFormatString = (date: Date): string => {
  return dayjs(date).format('YYYY/MM/DD')
}
