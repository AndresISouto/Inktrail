import { Banner } from "./Banner"
import { books } from '../../data/bookData'
import { BookCard } from "../shared/BookCard"

export const HomePage = () => {


  return (
    <>
      <Banner></Banner>
      <section>
        <h2 className="text-center font-semibold text-4xl p-4 m-4">Los mas vendidos</h2>
        <article className="flex items-center justify-around">
          {
            books.map(book => (
              <BookCard book={book}></BookCard>
            ))
          }
        </article>
        <h2 className="text-center font-semibold text-4xl p-4 m-4">Ultimas novedades</h2>
        <article className="flex items-center justify-around">
          {
            books.map(book => (
              <BookCard book={book}></BookCard>
            ))
          }
        </article>
      </section>

    </>
  )
}
