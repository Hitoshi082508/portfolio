import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  placeholder: string
  type: string
}
export const FCAnswerInput: React.FC<Props> = ({
  className,
  placeholder,
  type,
}) => {
  return (
    <div className={className}>
      <input placeholder={placeholder} type={type} />
    </div>
  )
}
export const AnswerInput = styled(FCAnswerInput)`
  margin: 0 90px 70px auto;
  ${({ theme }) => theme.media.sp`
    margin: 0 25px 15px auto;
  `}
  input {
    width: 700px;
    height: 60px;
    border: 2px solid #4594d7;
    border-radius: 36px;
    padding-left: 30px;
    ::placeholder {
      color: #4594d7;
      ${({ theme }) => theme.media.sp`
        font-size: 13px;
      `}
    }
    ${({ theme }) => theme.media.sp`
      width: 230px;
      height: 40px;
      padding-left: 15px;
      font-size: 13px;
    `}
  }
`
