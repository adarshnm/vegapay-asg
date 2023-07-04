import React, { useState } from 'react'
import CreateAccountModal from './Forms/CreateAccount';
import ViewModal from './Forms/ViewModal';
import CustomersTable from './Tables/CustomersTable';

function KitData() {
      const [showViewModal, setShowViewModal] = useState(false);
      const [showCreateAccountModal, setShowCreateAccountModal] =
        useState(false);
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
      <CustomersTable
        handleViewClick={onCardViewClick}
        handleCreateAccountClick={() => setShowCreateAccountModal(true)}
      />
      <ViewModal
        card={card}
        handleClose={handleCloseViewModal}
        open={showViewModal}
      />
      <CreateAccountModal
        open={showCreateAccountModal}
        handleClose={() => setShowCreateAccountModal(false)}
      />
    </>
  );
}

export default KitData