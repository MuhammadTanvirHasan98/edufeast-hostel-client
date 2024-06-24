import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useAdmin from '../Hooks/useAdmin'
import useAuth from '../Hooks/useAuth';
import LoadingSpinner from '../Components/Common/LoadingSpinner';
const AdminRoute = ({ children }) => {

 const[isAdmin, isLoading] = useAdmin();
 const {user ,loading}= useAuth();

  if (isLoading || loading) return <LoadingSpinner />
  if (user && isAdmin) return children
  return <Navigate to='/dashboard' />
}


export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}