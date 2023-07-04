import React, { useState } from "react";
import CardsTable from "./Tables/CardsTable";
import ViewCardModal from "./Forms/ViewCardModal";
import WalletDetails from "./Forms/WalletDetails";

interface CardsInfoProps {
  isReIssue: boolean;
}

function CardsInfo(props: CardsInfoProps) {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showWalletDetailsModal, setShowWalletDetailsModal] = useState(false);
  const [card, setCard] = useState<ICard | undefined>();

  const onCardViewClick = (card: ICard) => {
    setCard(card);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
  };

  return (
    <>
      <CardsTable
        handleViewClick={onCardViewClick}
        handleIssueClick={() => setShowWalletDetailsModal(true)}
        isReIssue={props.isReIssue}
      />
      <ViewCardModal
        card={card}
        handleClose={handleCloseViewModal}
        open={showViewModal}
      />
      <WalletDetails
        open={showWalletDetailsModal}
        handleClose={() => setShowWalletDetailsModal(false)}
      />
    </>
  );
}

export default CardsInfo;
