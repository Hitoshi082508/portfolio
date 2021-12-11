import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  placeholder: string
}
export const FCAnswerTextInput: React.FC<Props> = ({
  className,
  placeholder,
}) => {
  return (
    <div className={className}>
      <textarea placeholder={placeholder} />
    </div>
  )
}
export const AnswerTextInput = styled(FCAnswerTextInput)`
  margin: 0 90px 70px auto;
  ${({ theme }) => theme.media.sp`
    margin: 0 25px 15px auto;
  `}
  textarea {
    width: 700px;
    height: 260px;
    border: 2px solid #4594d7;
    border-radius: 36px;
    padding-left: 30px;
    padding-top: 15px;
    ::placeholder {
      color: #4594d7;
      ${({ theme }) => theme.media.sp`
        font-size: 13px;
      `}
    }
    ${({ theme }) => theme.media.sp`
      width: 230px;
      height: 180px;
      padding-left: 15px;
      font-size: 13px;
    `}
  }
`
