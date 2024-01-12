import React, {FC, useCallback} from 'react'
import {AxiosError} from "axios";
import {useMutation} from "react-query";

import useInput from "../../hooks/useInput";
import {addCategoryAPI} from "../../apis/categories";

type Props = {
  // children: React.ReactNode;
}

const AddCategoryButton: FC<Props> = () => {
  const [categoryName, onChangeCategoryName] = useInput('');
  const addCategoryMutation = useMutation('categories', addCategoryAPI,{
    onMutate(){
      console.log('add category mutation!')
    },
    onSuccess(){
      console.log('add category success!')
    },
    onSettled(){
      console.log('add category settled!')
    },
  });

  const modalOpen = useCallback(() => {
    const modal = document.getElementById('add-food-modal') as HTMLDialogElement
    if (modal) {
      modal.showModal();
    }
  }, []);

  const onSubmitHandle = useCallback(()=>{
    console.log('submit!')
    if(categoryName === '') alert('카테고리 이름을 넣어주세요!');
    if(categoryName){
      addCategoryMutation.mutate({name: categoryName})
    }
  },[addCategoryMutation])

  return (
    <>
      <button className="btn px-2" onClick={modalOpen}>카테고리 추가하기</button>
      <dialog id="add-food-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='flex flex-col gap-3'>
            <h3 className="font-bold text-lg">카테고리 추가하기</h3>
            <input className="input input-bordered rounded-sm w-full" type='text' placeholder='카테고리 이름을 넣어주세요.' onChange={onChangeCategoryName} />
            <div className='btn' onClick={onSubmitHandle}>매뉴추가하기</div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default AddCategoryButton;