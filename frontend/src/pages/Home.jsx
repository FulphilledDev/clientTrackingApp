import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaPenAlt, FaHandPaper } from 'react-icons/fa'
import { Modal } from 'react-modal'


const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// looks in index.html to mount
Modal.setAppElement('#root')

function Home() {
  // set local state for modal
  const [modalIsOpen, setIsOpen] = useState(false);


  // open/close modal
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  

  return (
    <>
      <section className="heading">
        <h1>Hello! Are you a client or coach?</h1>
        <p>Please choose one below</p>
      </section>

      <Link to="/admin" className='btn'>
        <FaPenAlt />Admin
      </Link>
      <Link to='/client' className='btn'>
        <FaHandPaper />Client
      </Link>

      {/* Nothing below this will show */}
      <button className='btn' onClick={openModal}><FaPenAlt />Admin Modal</button>
      <label for="my-modal" class="btn modal-button">open modal</label>


      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <label for="my-modal" class="btn">Yay!</label>
          </div>
        </div>
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Admin Modal"
      >
        {/* <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        {/* <div className='grid grid-rows-[40px_1fr]'>
          <div className='grid grid-cols-[1fr_30px]'>
            <h2>Add Comment</h2>
            <span className="text-center mb-auto items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={closeModal}>X</span>
          </div>
          <form>
            <div className="form-group">
              <textarea 
                name="commentText" 
                id="commentText" 
                className='form-control' 
                placeholder='Comment text' 
                
              ></textarea>
            </div>
            <div className="form-group">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" type='submit'>Submit</button>
            </div>
          </form>
        </div>        
      </Modal> */}
    </>
  )
}



export default Home