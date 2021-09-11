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
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h3">{item.title}</Typography>
        <Typography variant="h5" gutterBottom>
          {item.client}
        </Typography>
        <Typography variant="body1">{`${item.due}까지 납기`}</Typography>
        <Divider />
      </StyledCardContent>
      <CardActions>
        <Button />
      </CardActions>
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
`;
