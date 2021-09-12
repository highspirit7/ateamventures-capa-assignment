import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { IRequest } from "api/requests";

interface IRequestCardProps {
  item: IRequest;
}

const RequestCard: React.FC<IRequestCardProps> = ({ item }) => {
  return (
    <StyledCard variant="outlined">
      <StyledCardContent>
        <Typography variant="h3">{item.title}</Typography>
        <Typography variant="h5" gutterBottom>
          {item.client}
        </Typography>
        <Typography variant="body1">{`${item.due}까지 납기`}</Typography>
        <Divider />
        <dl>
          <dt>도면개수</dt>
          <dd>{item.count ?? item.docs}개</dd>
          <dt>총 수량</dt>
          <dd>{item.amount}</dd>
          <dt>가공방식</dt>
          <dd>{item.method.join()}</dd>
          <dt>재료</dt>
          <dd>{item.material.join()}</dd>
        </dl>
      </StyledCardContent>
      <StyledCardActions>
        <Button size="small">요청 내역 보기</Button>
        <Button size="small">채팅하기</Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default RequestCard;

const StyledCard = styled(Card)`
  /* width: 366px; */
  height: 356px;
  padding: 24px 16px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.second};
  }
`;

const StyledCardContent = styled(CardContent)`
  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }

  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.graySub};
    font-size: 14px;
    line-height: 20px;
  }

  hr {
    margin: 16px 0 32px;
    background-color: ${({ theme }) => theme.colors.border};
  }

  dl {
    display: grid;
    grid-template-columns: 102px auto;
    row-gap: 8px;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};
    dt {
    }

    dd {
      font-weight: bold;
    }
  }
`;

const StyledCardActions = styled(CardActions)`
  button {
    padding: 6px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  button:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.second};
    color: #fff;
  }

  button:nth-child(2) {
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.second};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.second};
  }
`;
