import { ExclamationIcon } from '@heroicons/react/solid'

/**
 * @name ErrorResponse
 * @description
 * @returns 
 * 
 * TODO: 
 * Connect functionality for unFocus to route back to index
 * Connect state to verify its rendered (bool)
 */

export default function ErrorResponse() {
    return (
        <div className="rounded-md bg-yellow-50 p-4 error-position-onscreen">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  There was an issue submitting your contact information. If you encounter this problem please
                  reach out to us at the following:<p className="text-black">ap.brown011@gmail.com</p>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}