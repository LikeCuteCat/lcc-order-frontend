import React, {FC, useCallback} from 'react'


type Props = {
  // children: React.ReactNode;
}

const AddFoodButton: FC<Props> = () => {

  const modalOpen = useCallback(() => {
    const modal = document.getElementById('add-food-modal') as HTMLDialogElement
    if (modal) {
      modal.showModal();
    }
  }, []);
  return (
    <>
      <button className="btn px-2" onClick={modalOpen}>메뉴 추가하기</button>
      <dialog id="add-food-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">메뉴 추가하기</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <div className='btn'>매뉴추가하기</div>
        </div>
      </dialog>
    </>
  )
}

export default AddFoodButton;