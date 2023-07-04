interface IUser {
    userId: string;
    clientId: string;
    platformId: string | string | null;
    platformName: string | string | null;
    name: string;
    mobileNumber: string;
    email: string;
    address: string;
    idType: string;
    idNumber: string;
    status: string;
    mccUser: boolean;
    userRoles: UserRole[];
    createdAt: Date;
    updatedAt: Date;
    team: string;
    isAdmin: boolean;
}

interface IUserRole {
    checkerMakerId?: string | string | null;
    checkerMakerFlag?: string | string | null;
    checkerMakerStatus: string | string | null;
    id: string;
    userId: string;
    roleId: string;
    roleName: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ICardProps {
    icon: "contact" | "profile",
    label: string,
    isActive?: boolean,
    onClick: () => void
}

interface IFormModalProps {
    open: boolean,
    handleClose: () => void,
    title: string,
}

interface Records {
    records?: IRecord[];
    pageNumber?: number;
    numberOfItems?: number;
    totalPages?: number;
    totalItems?: number;
}


interface IRecord {
    account: Account;
    customer: Customer;
    subWallets: SubWallet[];
    card: ICard;
}

interface Account {
    id: string;
    customerId: string;
    branchId: string;
    programId: string;
    primaryCardId: string;
    walletId: string;
    status: string;
    corporateCustomerId: string;
    accountLimit: number;
    programName: string;
    branchName: string;
    checkerMakerId: string;
    checkerMakerStatus: string;
}

interface ICard {
    id: string;
    accountId: string;
    binId: number;
    binEntityType: string | null;
    entityId: string | null;
    vendorId: string;
    vendorCardNumber: string;
    cardType: string;
    cardNetwork: string;
    cardStatus: string;
    lastFourDigits: string;
    cardNumber: string;
    expiryDate: string;
    cardCategory: string | null;
    pinStatus: string;
    replacedCardId: string | null;
    reasonForReplacement: string | null;
    nameOnCard: string | null;
    countryCode: string;
    mobileNumber: string;
    createdAt: Date;
    updatedAt: Date;
    primary: boolean;
}

interface Customer {
    customerId: string;
    clientId: string;
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    customerType: string;
    countryCode: string;
    mobileNumber: string;
    emailId: string;
    identity: Identity[];
    dob: Date;
    gender: string;
    currentAddress: EntAddress;
    isCurrentAddressPermanent: string | null;
    permanentAddress: EntAddress;
    nationality: string | null;
    status: string;
    kycStatus: string | null;
    creationVector: string;
    selfieUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    communicationPinCode: string | null;
    riskScore: string | null;
    bureauScore: string | null;
    branchId: string;
    corporateId: string | null;
    docsUrl: DocsURL;
    makerCheckerId: string;
    makerCheckerStatus: string;
    fullName: string;
}

interface EntAddress {
    id: number;
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}



interface Identity {
    id: number;
    customerId: string;
    clientId: string;
    idType: string | null;
    idNumber: string | null;
    idVerified: string;
    url: string | null;
}





interface SubWallet {
    id: string;
    walletId: string;
    ledgerId: string;
    type: string;
    currency: string;
    status: string;
    totalBalance: number;
    holdBalance: number;
    availableBalance: number;
    createdAt: Date;
    updatedAt: Date;
}