import React from 'react'
import styled from 'styled-components'
import { CompanyName } from 'src/components/atoms/CompanyName'
import { Label } from 'src/components/atoms/Label'
import { SkillText } from 'src/components/atoms/SkillText'

type Props = {
  className?: string
  labelText: string
  companyName: string
  skillText: string
}
export const FCCardText: React.FC<Props> = ({
  className,
  labelText,
  companyName,
  skillText,
}) => {
  return (
    <div className={className}>
      <Label text={labelText} />
      <CompanyName text={companyName} />
      <SkillText text={skillText} />
    </div>
  )
}
export const CardText = styled(FCCardText)``
