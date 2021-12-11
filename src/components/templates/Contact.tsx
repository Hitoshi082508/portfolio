import React from 'react'
import styled from 'styled-components'
import { AnswerButton } from '../atoms/AnswerButton'
// component
import { AnswerInput } from '../atoms/AnswerInput'
import { AnswerTextInput } from '../atoms/AnswerTextArea'
import { Question } from '../atoms/Question'
import { Title } from '../atoms/Title'

type Props = {
  className?: string
}
export const FCContact: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Contact" />
      <form className={`${className}__container`}>
        <Question text="あなたの名前を教えてください！" />
        <AnswerInput placeholder="名前を入力する" type="text" />
        <Question text="あなたの電話番号を教えてください！" />
        <AnswerInput placeholder="電話番号を入力する" type="tel" />
        <Question text="あなたのEmailを教えてください！" />
        <AnswerInput placeholder="メールアドレスを入力する" type="email" />
        <Question text="なんでも気軽にお問い合わせください！" />
        <AnswerTextInput placeholder="メッセージを入力する" />
        <Question text="この内容で送信してもよろしいですか？" />
        <AnswerButton text="メッセージを送信する" />
      </form>
    </div>
  )
}
export const Contact = styled(FCContact)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 50px;
  `}
  &__container {
    width: 97%;
    background-color: #fff;
    border-radius: 46px;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    padding-bottom: 140px;
    ${({ theme }) => theme.media.sp`
      padding-top: 75px;
      padding-bottom: 75px;
    `}
  }
`
