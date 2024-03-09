import Link from "next/link";
import { useRouter } from "next/router";
import CartIcon from "../../../public/assets/icons/CartIcon.svg";
import ProfileIcon from "../../../public/assets/icons/ProfileIcon.svg";
import { colors, firstlinks } from "../../../utils";
import MenuIcon from "../assets/svg/menuIcon.svg";
import CustomText from "../../CustomText";

const MobileMenu = ({ setOpenMenu, openMenu, setShowCart }: IIMobileMenu) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed z-40  bg-white w-screen h-screen px-[24px]">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="pt-[28px] pb-[20px] mb-[32px] flex justify-between"
        >
          <MenuIcon />
          <div className="flex gap-[28.76px]">
            <Link href="/auth/login">
              <ProfileIcon />
            </Link>
            <div onClick={() => setShowCart(true)}>
              <CartIcon />
            </div>
          </div>
        </div>
        <div className="">
          {firstlinks.map((nav, index) => (
            <div
              onClick={() => {
                setOpenMenu(false);
                router.push(nav.link);
              }}
              key={index}
              className=""
            >
              <CustomText
                text={nav.text}
                weight={350}
                color={
                  router.pathname === nav.link
                    ? "#EA5B31"
                    : "rgba(79, 79, 79, 1)"
                }
                className="text-[20px] mb-[24px] uppercase"
              />
            </div>
          ))}
        </div>
        <div>
          <CustomText
            text="Get the app"
            color={colors.deepBlue}
            weight={400}
            className="text-[16px] mb-[8.81px]"
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
