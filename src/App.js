
import {MainLayout, PostsComponent} from "./components";
import {TodosPagets} from "./pagets/TodosPagets";
import {AlbumsPagets} from "./pagets/AlbumsPagets";
import {CommentsPagets} from "./pagets/CommentsPagets";
import {Routes,Route} from "react-router";

function App() {
  return (
      <div >
        <Routes>
          <Route  path={'/'} element={<MainLayout/>}>
            <Route  path={'todos'} element={<TodosPagets/>}/>
            <Route path={'albums'} element={<AlbumsPagets/>}/>
            <Route  path={'comments'} element={<CommentsPagets/>}/>
            <Route path ={':postId'} element={<PostsComponent/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
