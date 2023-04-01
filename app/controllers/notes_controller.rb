class NotesController < ApplicationController    
    def index
        # notes = Note.all
        # notes = Note.find_by(user_id: params[:user_id])
        # if @current_user == note.user
        #     @current_user.notes
        #     render json: note, status: :ok
        # else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        # end
        notes = @current_user.notes
        render json: notes, status: :ok
    end

    def show
        note = find_note
        # note = @current_user.notes.find(params[:id])
        # render json: note, status: :ok
        if @current_user == note.user
            render json: note, status: :accepted
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        note = @current_user.notes.create!(note_params)
        render json: note, status: :created
    end

    def update
        note = find_note
        if @current_user == note.user
            note.update!(content: params[:content])
            render json: note, status: :accepted
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def destroy
        note = find_note
        if @current_user == note.user
            note.destroy
            head :no_content
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private 

    def find_note
        Note.find(params[:id])
    end

    def note_params
        params.permit(:user_id, :resource_id, :content)
    end
end
