type IMenuLayoutProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  refs: any;
  setSelectedMenu: React.Dispatch<
    React.SetStateAction<{
      id: string;
      image: string;
      name: string;
      price: number;
      quantity: number;
    }>
  >;
};

type IModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMenu: {
    id: string;
    image: string;
    name: string;
    price: number;
  };
};

type ClickEvent = {
  router: boolean;
  handleClick: function;
  setRoute: React.Dispatch<React.SetStateAction<boolean>>;
};

type CustomTextInput = {
  placeholder: string;
  value: string | number;
  setValue: any;
  type?: string;
  label: string;
  className?: string;
  width?: number;
  height?: number;
};

type CustomButton = {
  text: string | number;
  disabled: boolean;
  width?: number;
  height?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  fontWeight?: number;
  fontFamily?: string;
  textSize?: number;
  color?: string;
  loading?: boolean;
  onClick?: () => void;
  background?: any;
  border?: any;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderEndEndRadius?: number;
  borderEndStartRadius?: number;
  fontSize?: number;
  className?: any;
  href?: string;
};

type LayoutProps = {
  children: any;
};

type CustomTextProps = {
  text: string | JSX.Element;
  type?: string;
  className?: any;
  color?: any;
  weight?: number;
  fontFamily?: any;
  onClick?: () => void;
};

type CustomModalProps = {
  children: React.ReactNode;
  show: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

type IRecommendProps = {
  item: {
    name: string;
    amount: string;
  }[];
  type: string;
};

type IIMobileMenu = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

type IConfirmationBox = {
  openBox: boolean;
};

type CustomSearchBar = {
  placeholder: string;
  value?: string;
  setValue?: any;
  className?: any;
  data?: any;
  key?: number;
  item?: string;
};

type GiftCard = {
  orderNo?: number;
  quantity?: number;
  price?: number;
  discount?: number;
  total?: number;
  paymentMethod?: string;
};

type OrderDetails = {
  foodName?: string;
  orderId?: string | number;
  date?: number | string;
  statusUpdate?: string;
  img?: any;
  subTotal?: number | string;
  shippingFee?: string | number;
  totalFee?: string | number;
  paymentMethod?: string;
  customerName?: string;
  address?: string;
  initials?: string;
  number?: number | string;
  orderHistory?: any;
  amount?: number | string;
  quantity?: number;
};
type TopUpDetails = {
  date?: number | string;
  icon?: any;
  amount?: number | string;
  item?: JSX.Element;
};

type infoBlock = {
  heading: number | string;
  information: React.ReactNode;
  img: string;
  className: any;
  type?: string;
};
type frame = {
  heading: number | string;
  information: React.ReactNode;
  pic: string;
  img: string;
  className?: any;
  type?: string;
  subHead: string;
  subTitle: string;
  detail: string;
  subTopic: string;
  text: string;
  reasons: string;
};
type sideBars = {
  img1: string;
  img2: string;
};
