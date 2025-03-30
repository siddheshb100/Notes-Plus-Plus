from fastapi import FastAPI, HTTPException, Depends
from sqlmodel import SQLModel, Session, create_engine, select, Field
from typing import List
from fastapi.middleware.cors import CORSMiddleware

DATABASE_URL = 'sqlite:///./notes.db'
engine = create_engine(DATABASE_URL, connect_args={'check_same_thread': False})

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Note(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    content: str

@app.on_event("startup")
def create_db():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/notes/", response_model=List[Note])
def get_notes(session: Session = Depends(get_session)):
    notes = session.exec(select(Note)).all()
    return notes

@app.post("/notes/", response_model=Note)
def create_note(note: Note, session: Session = Depends(get_session)):
    session.add(note)
    session.commit()
    session.refresh(note)
    return note

@app.put("/notes/{note_id}", response_model=Note)
def update_note(note_id: int, updated_note: Note, session: Session = Depends(get_session)):
    note = session.get(Note, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")

    note.title = updated_note.title
    note.content = updated_note.content

    session.add(note)
    session.commit()
    session.refresh(note)
    return note

@app.delete("/notes/{note_id}")
def delete_note(note_id: int, session: Session = Depends(get_session)):
    note = session.get(Note, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    session.delete(note)
    session.commit()
    return {"message": "Note deleted"}

@app.get("/")
def root():
    return {"message": "Welcome to Notes++!"}
