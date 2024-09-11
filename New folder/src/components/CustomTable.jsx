import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'

const CustomTable = () => {
  return (
    <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-5 text-start text-xs font-medium text-gray-500 uppercase">Quiz Name</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Share</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category </th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">no of attemps</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">total earning </th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">active users</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Quizzes Name</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Orthopedic</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td> <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> $210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> <span> 
               <div className='flex justify-between w-full'>
               <BiEdit/>
               <MdDelete  />
               </div>
              </span>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Quizzes Name</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Orthopedic</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td> <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> $210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> <span> 
               <div className='flex justify-between w-full'>
               <BiEdit/>
               <MdDelete  />
               </div>
              </span>
              </td>
            </tr> <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Quizzes Name</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Orthopedic</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td> <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> $210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> <span> 
               <div className='flex justify-between w-full'>
               <BiEdit/>
               <MdDelete  />
               </div>
              </span>
              </td>
            </tr> <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Quizzes Name</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Orthopedic</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td> <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> $210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> <span> 
               <div className='flex justify-between w-full'>
               <BiEdit/>
               <MdDelete  />
               </div>
              </span>
              </td>
            </tr> <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Quizzes Name</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">10</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Orthopedic</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td> <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> $210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> 10
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"> <span> 
               <div className='flex justify-between w-full'>
               <BiEdit/>
               <MdDelete  />
               </div>
              </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default CustomTable