import style from "../styles/CategoryMenu.module.css";
import Link from "next/link";

export default function CategoryMenu() {
  return (
    <div className={style.content}>
      <div className={style.title}>Categorias</div>
      <Link href="/limpeza" className={style.category}>
        Limpeza
      </Link>
      <Link href="/alimentosbasicos" className={style.category}>
        Alimentos básicos
      </Link>
      <Link href="feira" className={style.category}>
        Feira
      </Link>
      <Link href="carnesavesepeixes" className={style.category}>
        Carne, Aves e Peixes
      </Link>
      <Link href="bebidas" className={style.category}>
        Bebidas
      </Link>
      <Link href="bebidasalcoolicas" className={style.category}>
        Bebidas Alcóolicas
      </Link>
      <Link href="higieneecuidadospessoais" className={style.category}>
        Higiene e Cuidados Pessoais
      </Link>
      <Link href="biscoitosesalgadinhos" className={style.category}>
        Biscoitos e Salgadinhos
      </Link>
    </div>
  );
}
